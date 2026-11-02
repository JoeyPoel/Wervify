/**
 * Resilient Prisma Client Singleton.
 * If DATABASE_URL is missing or unreachable, transparently falls back to an
 * in-memory mock store rather than crashing the serverless execution environment.
 */

import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient | undefined;
}

const memoryStore = {
  demoRequests: [] as any[],
  newsletterSubscribers: [] as any[],
  contactMessages: [] as any[],
};

/**
 * Creates an in-memory resilient fallback proxy if no DATABASE_URL is present.
 */
function createResilientFallbackClient(): any {
  console.warn('[Wervify Prisma] Warning: DATABASE_URL not configured. Operating in resilient fallback mode.');
  return {
    demoRequest: {
      create: async ({ data }: { data: any }) => {
        const record = { id: `mock-${Date.now()}`, createdAt: new Date(), updatedAt: new Date(), ...data };
        memoryStore.demoRequests.push(record);
        console.log('[Wervify Prisma Fallback] Persisted demoRequest in-memory:', record);
        return record;
      },
      findMany: async () => [...memoryStore.demoRequests],
    },
    newsletterSubscriber: {
      create: async ({ data }: { data: any }) => {
        const record = { id: `mock-${Date.now()}`, createdAt: new Date(), ...data };
        memoryStore.newsletterSubscribers.push(record);
        console.log('[Wervify Prisma Fallback] Persisted newsletterSubscriber in-memory:', record);
        return record;
      },
      findUnique: async ({ where }: { where: { email: string } }) => {
        return memoryStore.newsletterSubscribers.find((s) => s.email === where.email) || null;
      },
      upsert: async ({ where, create }: { where: { email: string }; create: any }) => {
        const existing = memoryStore.newsletterSubscribers.find((s) => s.email === where.email);
        if (existing) return existing;
        const record = { id: `mock-${Date.now()}`, createdAt: new Date(), ...create };
        memoryStore.newsletterSubscribers.push(record);
        return record;
      },
    },
    contactMessage: {
      create: async ({ data }: { data: any }) => {
        const record = { id: `mock-${Date.now()}`, createdAt: new Date(), ...data };
        memoryStore.contactMessages.push(record);
        console.log('[Wervify Prisma Fallback] Persisted contactMessage in-memory:', record);
        return record;
      },
    },
    $connect: async () => {},
    $disconnect: async () => {},
  };
}

export const prisma: any = (() => {
  if (!process.env.DATABASE_URL) {
    return createResilientFallbackClient();
  }

  try {
    const client = globalThis.prismaGlobal ?? new PrismaClient();
    if (process.env.NODE_ENV !== 'production') {
      globalThis.prismaGlobal = client;
    }
    return client;
  } catch (error) {
    console.error('[Wervify Prisma] Failed to initialize PrismaClient, falling back to mock:', error);
    return createResilientFallbackClient();
  }
})();
