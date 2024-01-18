class DependencyContainer {
  private static instance: DependencyContainer;
  private dependencies: Map<string, any> = new Map<string, any>();

  static getInstance(): DependencyContainer {
    if (!DependencyContainer.instance) {
      DependencyContainer.instance = new DependencyContainer();
    }
    return DependencyContainer.instance;
  }

  private register<T>(identifier: string, dependency: T) {
    this.dependencies.set(identifier, dependency);
  }

  get<T>(identifier: string): T {
    const dependency = this.dependencies.get(identifier);
    if (!dependency) {
      throw new Error(`Dependency '${identifier}' not found.`);
    }
    if (typeof dependency === 'function') {
      return dependency();
    }
    return dependency;
  }

  registerFactory<T>(identifier: string, dependency: T) {
    this.register(identifier, dependency);
  }

  registerSingleton<T>(identifier: string, dependency: T) {
    this.register(identifier, dependency);
  }
}

export const diContainer = DependencyContainer.getInstance();
