export interface IBlogPost {
    id: 0,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: [
    {
        id: string,
        provider: string
    }
    ],
    events: [
    {
        id: string,
        provider: string
    }
    ]
};

export type IBlogsResponsePagesCount = number ;
