import SearchBar from './SearchBar';
import CardCategory from './CardCategory';

function CategoriesContainer() {
  return (
    <div className="flex w-full flex-col pb-12 pt-12">
      <div className="w-2/3">
        <SearchBar />
      </div>
      <div className="  flex  w-full flex-row space-x-4   overflow-y-auto pt-8">
        <CardCategory title="legumes" bg="/agrobibi/legumes.png" />
        <CardCategory title="legume" bg="/agrobibi/epices.png" />
        <CardCategory title="legume" bg="/agrobibi/fruits.png" />
        <CardCategory title="legume" bg="/agrobibi/cereales.png" />
        <CardCategory title="legume" bg="/agrobibi/transforme.png" />
        <CardCategory title="legume" bg="/agrobibi/legumes.png" />
        <CardCategory title="legume" bg="/agrobibi/transforme.png" />
      </div>
    </div>
  );
}

export default CategoriesContainer;
