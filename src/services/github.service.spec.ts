import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  PaganiatedRequest,
  PaginatedReposReponse,
} from 'src/mocks/paginated-repos';
import { SearchRepoReponse, SearchRepoRequest } from 'src/mocks/search-repo';
import { User } from 'src/mocks/user';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetch user meta', (done) => {
    service.getUserMetaData('primefaces').subscribe((data) => {
      expect(data).toEqual(User);
      done();
    });
    const req = httpTestingController.expectOne(
      'https://api.github.com/users/primefaces'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(User);
    httpTestingController.verify();
  });

  it('fetch paginated repos', (done) => {
    service.getUserRepos(PaganiatedRequest).subscribe((data) => {
      expect(data).toEqual(PaginatedReposReponse);
      done();
    });
    const req = httpTestingController.expectOne(
      'https://api.github.com/users/primefaces/repos?per_page=1&page=1'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(PaginatedReposReponse);
    httpTestingController.verify();
  });

  it('search user repo', (done) => {
    service.searchUserRepos(SearchRepoRequest).subscribe((data) => {
      expect(data).toEqual(SearchRepoReponse);
      done();
    });
    const req = httpTestingController.expectOne(
      'https://api.github.com/search/repositories?q=test%20in%3Aname%2Cdescription%20user%3Aprimefaces&per_page=1&page=1'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(SearchRepoReponse);
    httpTestingController.verify();
  });
});
