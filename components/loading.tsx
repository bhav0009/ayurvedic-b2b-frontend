import { Spinner } from '@/components/ui/spinner';

interface LoadingProps {
  text?: string;
}

export function Loading({ text = 'Loading...' }: LoadingProps) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex items-center gap-3">
        <Spinner className="h-6 w-6" />
        <span className="text-muted-foreground">{text}</span>
      </div>
    </div>
  );
}