import { default as GitLogSearch } from '../GitLogSearch';

describe('git search', () => {
  it('works', () => {
    let gitLogSearch = new GitLogSearch('./', 'searchTerm', false);
  });
});