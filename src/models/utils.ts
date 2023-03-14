export interface GetUserRepoParams{
    username:string,
    pageSize:number,
    pageNumber:number
}

export interface SearchUserRepoParams{
    username:string,
    pageSize:number,
    pageNumber:number,
    query:string
}