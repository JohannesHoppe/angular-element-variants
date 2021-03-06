import { chain, Rule } from '@angular-devkit/schematics';
import { Schema as NgAddVariant } from './schema';
import { addElementVariantFile } from '../rules/generate-variant.rule';
import { addFileReplacements } from '../rules/add-file-replacements.rule';
import { parseVariant } from '../utils';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function addVariant(optionsSchema: NgAddVariant): Rule {
  const variant = parseVariant(optionsSchema.variant);
  const rules = [addElementVariantFile(optionsSchema)]
    .concat(variant !== 'default' ? addFileReplacements(optionsSchema) : []);

  return chain(rules);
}
