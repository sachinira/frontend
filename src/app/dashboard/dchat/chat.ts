export class ChatMessage {
    constructor(
    public sender_id:string='',
    public receiver_id:string='',
    public msg:string='',
    public date_time:string=''
){ }
}
