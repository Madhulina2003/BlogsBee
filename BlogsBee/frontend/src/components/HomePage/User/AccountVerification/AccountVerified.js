import React, { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VerifyAccountAction } from "../../../../redux/slices/accountVerification/accVerificationSlices";
import { logoutUserAction } from "../../../../redux/slices/users/userSlice";

export default function AccountVerified() {
  const { token } = useParams();
  //dispatch
  const dispatch = useDispatch();
  //verify account
  useEffect(() => {
    dispatch(VerifyAccountAction(token));
  }, [dispatch, token]);

  //store
  const acc = useSelector((state) => state.acc);
  const { verified } = acc;

  return (
    <>
      {verified ? (
        <div className='flex justify-center items-center min-h-screen bg-gray-400'>
          <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
            <div>
              <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
                <CheckIcon
                  className='h-6 w-6 text-green-600'
                  aria-hidden='true'
                />
              </div>
              <div className='mt-3 text-center sm:mt-5'>
                <div
                  as='h3'
                  className='text-lg leading-6 font-medium text-gray-900'
                >
                  Account Verified
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Your account is now verified. Logout and login back to see
                    the changes
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-5 sm:mt-6'>
              <button
                onClick={() => dispatch(logoutUserAction())}
                type='button'
                className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center bg-gray-800 items-center min-h-screen'>
          <Link
            to='/'
            type='button'
            className='inline-flex justify-center  rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
          >
            Go Home
          </Link>
        </div>
      )}
    </>
  );
}
