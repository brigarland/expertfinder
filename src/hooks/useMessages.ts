import { IMessage, MessageType, MessageContext, MessageState } from '../api'

export function useIncomingMessages(userId = ''): IMessage[] {
	return demoMessages.filter(f => userId === f.to)
}
export function useOutgoingMessages(userId = ''): IMessage[] {
	return demoMessages.filter(f => userId === f.from)
}

export const demoMessages: IMessage[] = [
	{
		to: 'jsmith@microsoft.com',
		from: 'cevans@microsoft.com',
		date: new Date('December 12, 2019 13:16:00'),
		messageBody:
			"I'm looking for an engineer with experience in React to help my team",
		messageType: MessageType.Request,
		contextType: MessageContext.Mentor,
		messageState: MessageState.Pending,
	},
	{
		to: 'jsmith@microsoft.com',
		from: 'kdagal@microsoft.com',
		date: new Date('December 5, 2019 23:34:00'),
		messageBody:
			"I'm looking for an engineer with experience in React to help my team",
		messageType: MessageType.Request,
		contextType: MessageContext.Influencer,
		messageState: MessageState.Pending,
	},
	{
		to: 'jsmith@microsoft.com',
		from: 'kwashington@microsoft.com',
		date: new Date('November 27, 2019 03:23:00'),
		messageBody:
			"I'm looking for an engineer with experience in React to help my team",
		messageType: MessageType.Request,
		contextType: MessageContext.Expert,
		messageState: MessageState.Pending,
	},
]
