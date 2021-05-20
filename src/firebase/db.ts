import { db } from './firebase'
import { Event } from '@/models/event.model'

const eventCollection = db.collection('events')

export const getEvents = async (): Promise<Event[]> => {
    const querySnapshot = await eventCollection.get()
    return querySnapshot.docs.map(doc => {
        const id = doc.id
        const data = doc.data()
        return { id, ...data } as unknown as Event
    })
}

export const getEvent = async (id: number): Promise<Event> => {
    const querySnapshot = await eventCollection.doc(id.toString()).get()
    return querySnapshot.data() as unknown as Event
}