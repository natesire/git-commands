import { exec } from 'child_process';
export default class GitLogSearch {
  private readonly gitLog: string;
  private readonly searchTerm: string;
  private readonly searchTermRegex: RegExp;
  private readonly searchTermCaseSensitive: boolean;
  private readonly searchTermRegexFlags: string;
  private readonly searchTermRegexFlagsCaseSensitive: string;
  private readonly searchTermRegexFlagsCaseInsensitive: string;

  constructor(
    gitLog: string,
    searchTerm: string,
    searchTermCaseSensitive: boolean = false
  ) {
    this.gitLog = gitLog;
    this.searchTerm = searchTerm;
    this.searchTermCaseSensitive = searchTermCaseSensitive;

    this.searchTermRegex = new RegExp(searchTerm, 'g');
    this.searchTermRegexFlags = searchTermCaseSensitive
      ? ''
      : 'i';
    this.searchTermRegexFlagsCaseSensitive = searchTermCaseSensitive
      ? ''
      : 'i';
    this.searchTermRegexFlagsCaseInsensitive = searchTermCaseSensitive
      ? 'i'
      : '';
  }

  

  public getSearchTermRegex(): RegExp {
    return this.searchTermRegex;
  }

  public getSearchTermRegexFlags(): string {
    return this.searchTermCaseSensitive
      ? this.searchTermRegexFlags
      : this.searchTermRegexFlagsCaseInsensitive;
  }

  public getSearchTermRegexFlagsCaseSensitive(): string {
    return this.searchTermRegexFlagsCaseSensitive;
  }

  public getSearchTermRegexFlagsCaseInsensitive(): string {
    return this.searchTermRegexFlagsCaseInsensitive;
  }

  public getSearchTerm(): string {
    return this.searchTerm;
  }

  public getSearchTermCaseSensitive(): boolean {
    return this.searchTermCaseSensitive;
  }

  public getGitLog(): string {
    return this.gitLog;
  }

  public getGitLogLines(): string[] {
    return this.gitLog.split('\n');
  }
}