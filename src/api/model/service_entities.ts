export interface IPerson {
	/**
	 * Unique identifier for the employee
	 */
	id: string
	/**
	 * The employee's name
	 */
	name?: string
	/**
	 * The employee's email address
	 */
	email?: string

	/**
	 * Person Image Url
	 */
	imageUrl?: string

	/**
	 * The functional area this employee works in
	 */
	function: string

	/**
	 * The organization this employee works in
	 */
	organization: string

	/**
	 * The region this employee works in.
	 */
	region: string

	/**
	 * Key technical or nontechnical skills that this employee
	 * is proficient with
	 */
	skills: Skill[]

	/**
	 * Projects that this employee has been attached to.
	 */
	projects: Project[]

	/**
	 * Topical areas of expertise
	 */
	topics: Topic[]

	/**
	 * The employee's eigenvector centrality
	 * https://en.wikipedia.org/wiki/Eigenvector_centrality
	 */
	eigenCentrality: number

	/**
	 * The employee's betweenness centrality
	 * https://en.wikipedia.org/wiki/Betweenness_centrality
	 *
	 */
	betweenness: number

	/**
	 * The employee's pagerank
	 * https://en.wikipedia.org/wiki/PageRank
	 */
	pageRank: number

	/**
	 * The ExpertScore of this user, indicating how well they respond to requests
	 */
	rewardPoints?: number
}

export const unknownPerson: IPerson = {
	id: '-1',
	email: 'unknown@email',
	function: 'Unknown',
	organization: 'Unknown',
	region: 'Unknown',
	skills: [],
	projects: [],
	topics: [],
	eigenCentrality: 0,
	betweenness: 0,
	pageRank: 0,
}

export type Org = string
export type Skill = string
export type Project = string
export type Topic = string

export enum MessageType {
	Request = 'Request',
	Kudo = 'Kudo',
}

export enum MessageContext {
	Expert = 'Expert',
	Influencer = 'Influencer',
	Mentor = 'Mentor',
}

export enum MessageState {
	Accepted = 'Accepted',
	Declined = 'Declined',
	Pending = 'Pending',
	Suggested = 'Suggested',
	Sent = 'Sent',
}

export interface IMessage {
	/**
	 * Id of the user who recieved the message
	 * TODO: Will replace email with number for security
	 */
	to: string
	/**
	 * Id of the user who sent the message
	 * TODO: Will replace email with number for security
	 */
	from: string
	/**
	 * Date sent
	 */
	date: Date
	/**
	 * Body of message (the actual message)
	 */
	messageBody: string
	/**
	 * Enum: Request, Kudo
	 */
	messageType: MessageType
	/**
	 * Enum: Influencer, Mentor, Expert
	 */
	contextType: MessageContext
	/**
	 * Enum: Pending, Declined, Accepted, Suggested, Sent
	 */
	messageState: MessageState
}
