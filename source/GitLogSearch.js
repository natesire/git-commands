import { exec } from 'child_process';
export default class GitLogSearch {
    constructor(gitLog, searchTerm, searchTermCaseSensitive = false) {
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
    // run shell command
    runShellCommand(command) {
        return exec(command); // why can vscode show me this function signature but complains not found ?
    }
    shellExec(command) {
        //'git log --all --pretty=format:"%H %s" | grep -m100 "$1"';
        //git log --all --pretty=format:"%H %s" | grep -m100 "$1"';
    }
    getSearchTermRegex() {
        return this.searchTermRegex;
    }
    getSearchTermRegexFlags() {
        return this.searchTermCaseSensitive
            ? this.searchTermRegexFlags
            : this.searchTermRegexFlagsCaseInsensitive;
    }
    getSearchTermRegexFlagsCaseSensitive() {
        return this.searchTermRegexFlagsCaseSensitive;
    }
    getSearchTermRegexFlagsCaseInsensitive() {
        return this.searchTermRegexFlagsCaseInsensitive;
    }
    getSearchTerm() {
        return this.searchTerm;
    }
    getSearchTermCaseSensitive() {
        return this.searchTermCaseSensitive;
    }
    getGitLog() {
        return this.gitLog;
    }
    getGitLogLines() {
        return this.gitLog.split('\n');
    }
}
