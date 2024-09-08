import { useDispatch, useSelector } from "react-redux";
import style from "./CatalogPage.module.css";
import { useState, useEffect } from "react";
import { campersGet } from "../../redux/campers/operations";
import CamperList from "../../components/CamperList/CamperList";
import { selectCampers } from "../../redux/campers/selectors";
import Filters from "../../components/Filters/Filters";

const CatalogPage = ({}) => {
  const [globalParams, setGlobalParams] = useState({
    location: null,
    selectedCategoriesForm: [],
    selectedCategoriesDetails: [],
    page: 1,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(campersGet(globalParams));
  }, [globalParams]);
  const arrayCampers = useSelector(selectCampers);

  return (
    <main className={style.containerMain}>
      <Filters globalParams={globalParams} setGlobalParams={setGlobalParams} />
      <CamperList
        globalParams={globalParams}
        array={arrayCampers}
        setGlobalParams={setGlobalParams}
      />
    </main>
  );
};

export default CatalogPage;
