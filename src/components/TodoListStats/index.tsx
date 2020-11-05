import React from 'react';
import { useRecoilValue } from 'recoil';

// Local Dependencies
import { todoListStatsState } from 'src/features/TodoList/selectors';

export const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <div className="flex-grow pt-3 pb-4">
      <div className="w-full text-center block md:hidden">
        <div className="text-grey-darker">
          <span className="text-2xl">{totalNum}</span>
        </div>
        <div className="text-xs uppercase text-grey tracking-wide">
          Total items
        </div>
      </div>
      <div className="hidden md:flex bg-white sm:rounded shadow">
        <div className="w-1/4 text-center py-4">
          <div className="border-r">
            <div className="text-grey-darker mb-2">
              <span className="text-2xl">{totalNum}</span>
            </div>
            <div className="text-xs uppercase text-grey tracking-wide">
              Total items
            </div>
          </div>
        </div>
        <div className="w-1/4 text-center py-4">
          <div className="border-r">
            <div className="text-grey-darker mb-2">
              <span className="text-2xl">{totalCompletedNum}</span>
            </div>
            <div className="text-xs uppercase text-grey tracking-wide">
              Items completed
            </div>
          </div>
        </div>
        <div className="w-1/4 text-center py-4">
          <div className="border-r">
            <div className="text-grey-darker mb-2">
              <span className="text-2xl">{totalUncompletedNum}</span>
            </div>
            <div className="text-xs uppercase text-grey tracking-wide">
              Items not completed
            </div>
          </div>
        </div>
        <div className="w-1/4 text-center py-4">
          <div className="text-grey-darker mb-2">
            <span className="text-2xl">{formattedPercentCompleted}</span>
            <span className="text-1xl align-top">%</span>
          </div>
          <div className="text-xs uppercase text-grey tracking-wide">
            Percent completed
          </div>
        </div>
      </div>
    </div>
  );
};
