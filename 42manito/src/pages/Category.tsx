import { RootState } from "@/RTK/store";
import CategoryModal from "@/components/category/CategoryModal";
import HappyDevelopAnimation from "@/components/category/HappyDevelopAnimaiton";
import PandaSingAnimation from "@/components/category/PandaSingAnimation";
import Layout from "@/components/layout/Layout";
import MentorModal from "@/components/mentor/MentorModal";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Category = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState<number>(0); //

  const currMentorState = useSelector(
    (state: RootState) => state.rootReducers.currMentor
  );

  const onOpen = (id: number) => {
    setIsVisible(true);
    setCategoryId(id);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  return (
    <>
      <Layout>
        <div className="app-container min-h-screen">
          <div className="flex flex-wrap w-full justify-center lg:justify-around items-center">
            <div className=" my-16 md:my-3">
              <HappyDevelopAnimation />
              <div className="w-full flex justify-start">
                <span
                  className="text-4xl dark:text-white text-slate-800 font-bold mt-4 hover:scale-110 hover:text-indigo-500"
                  onClick={() => {
                    onOpen(1);
                  }}
                >
                  ← Study
                </span>
              </div>
            </div>
            <div className="my-16 md:my-3">
              <PandaSingAnimation />
              <div className="w-full flex justify-end">
                <span
                  className="text-4xl dark:text-white text-slate-800 font-bold mt-4 hover:scale-110 hover:text-indigo-500"
                  onClick={() => {
                    onOpen(2);
                  }}
                >
                  Hobby →
                </span>
              </div>
            </div>
          </div>
        </div>
        {isVisible && (
          <CategoryModal onClose={onClose} categoryId={categoryId} />
        )}
        {currMentorState.openMentorModal && currMentorState.currMentor.user && (
          <MentorModal />
        )}
      </Layout>
    </>
  );
};

export default Category;
