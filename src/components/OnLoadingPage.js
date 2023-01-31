import React from 'react';

function OnLoadingPage() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-primary-100 rounded-full animate-spin"></div>
        </div>
    </div>
  )
}

export default OnLoadingPage;