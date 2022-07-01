import { Logger } from '@nestjs/common';

export const MethodInspector = () => {
  const logger = new Logger('MethodInspector');

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const targetMethod = descriptor.value;
    const scope = `${target?.constructor?.name} (${propertyKey}`;

    descriptor.value = async function (...args: any[]) {
      logger.debug(`${scope}-input) - ${JSON.stringify(args)}`);
      const result = await targetMethod.apply(this, args);
      logger.debug(`${scope}-output) - ${JSON.stringify(result)}`);

      return result;
    };

    return descriptor;
  };
};
