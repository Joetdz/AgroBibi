import EventCard from './EventCard';
function EventContainer() {
  return (
    <div>
      <h1 className="pb-3 pt-2 text-4xl font-bold text-[#189643]">
        Ce que nous faisons{' '}
      </h1>

      <div className="h-[5px] w-1/4 rounded-full bg-[#189643]"></div>
      <div className="grid grid-cols-1 grid-rows-3 gap-6 md:grid-cols-4">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default EventContainer;
