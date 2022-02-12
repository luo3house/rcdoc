import { get } from 'lodash-es';
import { join } from 'path';
import slash from 'slash2';
import { ROOT } from '../common/constant';

export function getConfigThemeAlias(mdocConfig) {
  let siteTheme = get(mdocConfig, 'site.theme');
  if (siteTheme) {
    siteTheme = slash(join(ROOT, 'node_modules', siteTheme))
    return { 'mdoc-theme-default': siteTheme }
  }
  return {}
}