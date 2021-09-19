import {convertLinkToFullFledged} from "../utils/link-validation-utils";

describe('Link parsing and validation', () => {

    it.each([['https://docs.google.com'],['http://www.google.com']])('Should consider %s a full-fledged link as it starts with http(s) as-is', (link: string) => {
        // Nothing changes
        expect(convertLinkToFullFledged(link)).toEqual(link);
    })

    it.each([['docs.google.com'],['www.google.com']])('Should consider %s a non full-fledged url and add http in front', (link: string) => {
        // Nothing changes
        expect(convertLinkToFullFledged(link)).toMatch(/^http?/)
    })
})
