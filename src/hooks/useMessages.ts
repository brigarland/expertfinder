import { IMessage, MessageType, MessageContext, MessageState } from '../api'

export function useIncomingMessages(userId = ''): IMessage[] {
	return demoMessages.filter(
		f => userId === f.to && f.messageType === MessageType.Request,
	)
}
export function useOutgoingMessages(userId = ''): IMessage[] {
	return demoMessages.filter(
		f => userId === f.from && f.messageType === MessageType.Request,
	)
}
export function useSuggestedKudos(userId = ''): IMessage[] {
	return demoMessages.filter(
		f =>
			userId === f.from &&
			f.messageType === MessageType.Kudo &&
			f.messageState === MessageState.Suggested,
	)
}
export function useReveivedKudos(userId = ''): IMessage[] {
	return demoMessages.filter(
		f =>
			userId === f.to &&
			f.messageType === MessageType.Kudo &&
			f.messageState === MessageState.Sent,
	)
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
	{
		to: 'bortega@microsoft.com',
		from: 'jsmith@microsoft.com',
		date: new Date('November 27, 2019 03:34:00'),
		messageBody:
			"I'm looking for an engineer with experience in React to help my team",
		messageType: MessageType.Request,
		contextType: MessageContext.Mentor,
		messageState: MessageState.Accepted,
	},
	{
		to: 'jhall@microsoft.com',
		from: 'jsmith@microsoft.com',
		date: new Date('November 27, 2019 03:39:00'),
		messageBody: "I'm looking for an mentor that can help with career guidance",
		messageType: MessageType.Request,
		contextType: MessageContext.Mentor,
		messageState: MessageState.Pending,
	},
	{
		to: 'mpitt@microsoft.com',
		from: 'jsmith@microsoft.com',
		date: new Date('October 26, 2019 02:33:00'),
		messageBody:
			"I'm looking for someone who can help get help organize more team cohesion",
		messageType: MessageType.Request,
		contextType: MessageContext.Influencer,
		messageState: MessageState.Pending,
	},
	{
		to: 'aanthony@microsoft.com',
		from: 'jsmith@microsoft.com',
		// date: new Date('November 28, 2019 09:00:00'),
		messageBody: 'Thank you for helping me prepare for those management exams!',
		messageType: MessageType.Kudo,
		contextType: MessageContext.Expert,
		messageState: MessageState.Suggested,
	},
	{
		to: 'pwilliams@microsoft.com',
		from: 'jsmith@microsoft.com',
		// date: new Date('November 25, 2019 09:00:00'),
		messageBody: 'Great work on the Contoso Launch Party.',
		messageType: MessageType.Kudo,
		contextType: MessageContext.Influencer,
		messageState: MessageState.Suggested,
	},
	{
		to: 'jsmith@microsoft.com',
		from: 'nmitchell@microsoft.com',
		date: new Date('October 23, 2019 4:16:00'),
		messageBody:
			"Thank you for all of your help getting the marketing team trained on our new tracking system.  We couldn't have rolled it out without you!",
		messageType: MessageType.Kudo,
		contextType: MessageContext.Influencer,
		messageState: MessageState.Sent,
	},
	{
		to: 'jsmith@microsoft.com',
		from: 'mpollard@microsoft.com',
		date: new Date('October 19, 2019 03:20:00'),
		messageBody:
			'You rock! Thanks for helping us out with getting the new analytics tracking from our website to our applicant tracking system.',
		messageType: MessageType.Kudo,
		contextType: MessageContext.Expert,
		messageState: MessageState.Sent,
	},
]
