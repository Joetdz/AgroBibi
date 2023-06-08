import TeamCard from './TeamCard';

function TeamsContainer() {
  return (
    <>
      <div>
        <h1 className="pb-3 pt-10 text-3xl font-bold text-[#189643] md:text-4xl">
          Notre équipe{' '}
        </h1>
        <div className="h-[5px] w-[8vw] rounded-full bg-[#189643]"></div>{' '}
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-6 pb-8 pt-10 md:grid-cols-4">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </>
  );
}

export default TeamsContainer;
