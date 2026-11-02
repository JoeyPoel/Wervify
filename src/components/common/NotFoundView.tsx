import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { strings } from '../../constants/strings';
import { Home } from 'lucide-react';

interface NotFoundViewProps {
  onGoHome: () => void;
}

/**
 * 404 Not Found Page View.
 * @param props NotFoundViewProps
 */
export const NotFoundView: React.FC<NotFoundViewProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 bg-wervify-void">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <span className="text-7xl sm:text-9xl font-black font-mono text-wervify-azure/40 block">
            {strings.notFound.code}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-wervify-white">
            {strings.notFound.title}
          </h1>
          <p className="text-base text-slate-300 max-w-md mx-auto leading-relaxed">
            {strings.notFound.description}
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" onClick={onGoHome} className="gap-2">
              <Home className="h-4 w-4" />
              <span>{strings.notFound.homeButton}</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

