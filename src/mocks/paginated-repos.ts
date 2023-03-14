import { GitHubRepo } from 'src/models/github-api';
import { GetUserRepoParams } from 'src/models/requests';

export const PaginatedReposReponse: GitHubRepo[] = [
  {
    id: 244309570,
    node_id: 'MDEwOlJlcG9zaXRvcnkyNDQzMDk1NzA=',
    name: 'landing',
    full_name: 'primefaces/landing',
    private: false,
    owner: {
      login: 'primefaces',
      id: 3494069,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjM0OTQwNjk=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3494069?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/primefaces',
      html_url: 'https://github.com/primefaces',
      followers_url: 'https://api.github.com/users/primefaces/followers',
      following_url:
        'https://api.github.com/users/primefaces/following{/other_user}',
      gists_url: 'https://api.github.com/users/primefaces/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/primefaces/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/primefaces/subscriptions',
      organizations_url: 'https://api.github.com/users/primefaces/orgs',
      repos_url: 'https://api.github.com/users/primefaces/repos',
      events_url: 'https://api.github.com/users/primefaces/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/primefaces/received_events',
      type: 'Organization',
      site_admin: false,
    },
    html_url: 'https://github.com/primefaces/landing',
    description: 'Landing Pages of UI Libraries',
    fork: false,
    url: 'https://api.github.com/repos/primefaces/landing',
    forks_url: 'https://api.github.com/repos/primefaces/landing/forks',
    keys_url: 'https://api.github.com/repos/primefaces/landing/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/primefaces/landing/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/primefaces/landing/teams',
    hooks_url: 'https://api.github.com/repos/primefaces/landing/hooks',
    issue_events_url:
      'https://api.github.com/repos/primefaces/landing/issues/events{/number}',
    events_url: 'https://api.github.com/repos/primefaces/landing/events',
    assignees_url:
      'https://api.github.com/repos/primefaces/landing/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/primefaces/landing/branches{/branch}',
    tags_url: 'https://api.github.com/repos/primefaces/landing/tags',
    blobs_url:
      'https://api.github.com/repos/primefaces/landing/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/primefaces/landing/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/primefaces/landing/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/primefaces/landing/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/primefaces/landing/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/primefaces/landing/languages',
    stargazers_url:
      'https://api.github.com/repos/primefaces/landing/stargazers',
    contributors_url:
      'https://api.github.com/repos/primefaces/landing/contributors',
    subscribers_url:
      'https://api.github.com/repos/primefaces/landing/subscribers',
    subscription_url:
      'https://api.github.com/repos/primefaces/landing/subscription',
    commits_url:
      'https://api.github.com/repos/primefaces/landing/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/primefaces/landing/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/primefaces/landing/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/primefaces/landing/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/primefaces/landing/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/primefaces/landing/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/primefaces/landing/merges',
    archive_url:
      'https://api.github.com/repos/primefaces/landing/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/primefaces/landing/downloads',
    issues_url:
      'https://api.github.com/repos/primefaces/landing/issues{/number}',
    pulls_url: 'https://api.github.com/repos/primefaces/landing/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/primefaces/landing/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/primefaces/landing/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/primefaces/landing/labels{/name}',
    releases_url:
      'https://api.github.com/repos/primefaces/landing/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/primefaces/landing/deployments',
    created_at: '2020-03-02T07:42:07Z',
    updated_at: '2022-04-27T14:18:32Z',
    pushed_at: '2021-10-14T07:47:14Z',
    git_url: 'git://github.com/primefaces/landing.git',
    ssh_url: 'git@github.com:primefaces/landing.git',
    clone_url: 'https://github.com/primefaces/landing.git',
    svn_url: 'https://github.com/primefaces/landing',
    homepage: null,
    size: 10399,
    stargazers_count: 4,
    watchers_count: 4,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 2,
    open_issues: 0,
    watchers: 4,
    default_branch: 'master',
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
];

export const PaganiatedRequest: GetUserRepoParams = {
  username: 'primefaces',
  pageSize: 1,
  pageNumber: 1,
};
