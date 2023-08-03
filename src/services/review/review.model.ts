export interface IReview {
    status : `${ReviewStatus}`
}

export enum ReviewStatus {
    open = 'open',
    sent = 'sent',
    cancelled = 'cancelled'
}