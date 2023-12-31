import { container } from 'inversify-props';
import * as s from './shared';

// How to inject a dependency

// In a Service: @inject() logService: ILogService;
// In a Hook or component: const [nameService] = useInject<INameService>(cid.INameService)

export function containerBuilder(): void {
  // Bind shared services
  container.addSingleton<s.ILogService>(s.LogService);
}
