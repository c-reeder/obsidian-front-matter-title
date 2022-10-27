import AliasModifierStrategyInterface from "@src/Components/MetadataCacheAlias/Interfaces/AliasModifierStrategyInterface";
import {inject, injectable, named} from "inversify";
import ResolverInterface, {Resolving} from "@src/Interfaces/ResolverInterface";
import SI from "@config/inversify.types";
import Alias from "@src/Components/MetadataCacheAlias/Alias";

@injectable()
export default abstract class AbstractStrategy implements AliasModifierStrategyInterface {
    constructor(
        @inject(SI.resolver) @named(Resolving.Sync)
        private resolver: ResolverInterface
    ) {
    }

    process(alias: Alias, path: string): void {
        const title = this.resolver.resolve(path);
        if (title) {
            this.modify(alias, title);
        }
    }

    protected abstract modify(alias: Alias, title: string): void;
}