export default function Footer() {
  return (
    <div className="h-[45vh] w-full bg-black">
      <div className="flex flex-row justify-between pl-16 pr-4 pt-16">
        <div className="flex flex-col space-y-8">
          <h2 className="text-xl font-bold text-white">Adresse</h2>
          <p className="text-white">N° 00 Blvd du 30 juin Kinshasa, Gombe</p>
        </div>
        <div className="flex flex-col space-y-8">
          <h2 className="text-xl font-bold text-white">CONTACTS</h2>
          <p className="text-white">
            +243 00000000 +243 000000000 +243 000000000
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <h2 className="flex-wrap text-xl font-bold text-white">A PROPOS</h2>
          <p className="text-white">
            <p>Le Lorem Ipsum est simplement du faux texte employé </p>
          </p>
        </div>
      </div>
      <div className=" mt-4 flex  flex-row items-center justify-center border-t border-solid border-white  text-white"></div>
    </div>
  );
}
