import { GitRepoSearchResponse } from 'src/models/github-api';
import { SearchUserRepoParams } from 'src/models/requests';

export const SearchRepoReponse: GitRepoSearchResponse = {
  total_count: 1,
  incomplete_results: false,
  items: [
    {
      id: 76545668,
      node_id: 'MDEwOlJlcG9zaXRvcnk3NjU0NTY2OA==',
      name: 'primefaces-test',
      full_name: 'primefaces/primefaces-test',
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
      html_url: 'https://github.com/primefaces/primefaces-test',
      description: 'Sample project to provide test cases',
      fork: false,
      url: 'https://api.github.com/repos/primefaces/primefaces-test',
      forks_url:
        'https://api.github.com/repos/primefaces/primefaces-test/forks',
      keys_url:
        'https://api.github.com/repos/primefaces/primefaces-test/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/primefaces/primefaces-test/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/primefaces/primefaces-test/teams',
      hooks_url:
        'https://api.github.com/repos/primefaces/primefaces-test/hooks',
      issue_events_url:
        'https://api.github.com/repos/primefaces/primefaces-test/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/primefaces/primefaces-test/events',
      assignees_url:
        'https://api.github.com/repos/primefaces/primefaces-test/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/primefaces/primefaces-test/branches{/branch}',
      tags_url: 'https://api.github.com/repos/primefaces/primefaces-test/tags',
      blobs_url:
        'https://api.github.com/repos/primefaces/primefaces-test/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/primefaces/primefaces-test/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/primefaces/primefaces-test/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/primefaces/primefaces-test/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/primefaces/primefaces-test/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/primefaces/primefaces-test/languages',
      stargazers_url:
        'https://api.github.com/repos/primefaces/primefaces-test/stargazers',
      contributors_url:
        'https://api.github.com/repos/primefaces/primefaces-test/contributors',
      subscribers_url:
        'https://api.github.com/repos/primefaces/primefaces-test/subscribers',
      subscription_url:
        'https://api.github.com/repos/primefaces/primefaces-test/subscription',
      commits_url:
        'https://api.github.com/repos/primefaces/primefaces-test/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/primefaces/primefaces-test/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/primefaces/primefaces-test/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/primefaces/primefaces-test/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/primefaces/primefaces-test/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/primefaces/primefaces-test/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/primefaces/primefaces-test/merges',
      archive_url:
        'https://api.github.com/repos/primefaces/primefaces-test/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/primefaces/primefaces-test/downloads',
      issues_url:
        'https://api.github.com/repos/primefaces/primefaces-test/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/primefaces/primefaces-test/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/primefaces/primefaces-test/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/primefaces/primefaces-test/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/primefaces/primefaces-test/labels{/name}',
      releases_url:
        'https://api.github.com/repos/primefaces/primefaces-test/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/primefaces/primefaces-test/deployments',
      created_at: '2016-12-15T09:34:55Z',
      updated_at: '2022-11-10T11:54:31Z',
      pushed_at: '2023-03-05T13:28:04Z',
      git_url: 'git://github.com/primefaces/primefaces-test.git',
      ssh_url: 'git@github.com:primefaces/primefaces-test.git',
      clone_url: 'https://github.com/primefaces/primefaces-test.git',
      svn_url: 'https://github.com/primefaces/primefaces-test',
      homepage: '',
      size: 214,
      stargazers_count: 26,
      watchers_count: 26,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 145,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 145,
      open_issues: 0,
      watchers: 26,
      default_branch: 'master',
      score: 1.0,
    },
  ],
};

export const SearchRepoRequest: SearchUserRepoParams = {
  username: 'primefaces',
  pageSize: 1,
  pageNumber: 1,
  query: 'test',
};
