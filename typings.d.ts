
export interface Event {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    },
    url:string;
    eventDate:string;
    comments: Comment[];
    image: {
        asset: {
            url: string;
        };
    };
    slug: {
        current:string;
    };
    body: TypedObject[];
}

export interface UpcomingEventProps {
    upcomingEvents: [Event];
  }