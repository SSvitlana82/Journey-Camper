import style from "./CamperList.module.css";

import CamperCard from "../CamperCard/CamperCard";
import { Button } from "antd";
import { useSelector } from "react-redux";

import { selectTotalPages } from "../../redux/campers/selectors";

const CamperList = ({
  array,
  globalParams = {},
  setGlobalParams,
  isFavorite = false,
}) => {
  const handleLoadMore = () => {
    setGlobalParams({ ...globalParams, page: globalParams.page + 1 });
  };
  const totalPage = useSelector(selectTotalPages);
  const hasNextPage = globalParams.page < totalPage;

  return (
    <div className={style.container}>
      <ul className={style.listContainer}>
        {array.map((item) => {
          return (
            <li className={style.itemContainer} key={item._id}>
              <CamperCard data={item} />
            </li>
          );
        })}
      </ul>
      {hasNextPage && !isFavorite && (
        <Button className={style.btn} onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </div>
  );
};

export default CamperList;
