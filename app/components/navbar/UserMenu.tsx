"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toogleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    //open login  modal
  }, [loginModal, currentUser]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toogleOpen}
          className="
        py-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItems label="My trips" onClick={() => {}} />
                <MenuItems label="My favorites" onClick={() => {}} />
                <MenuItems label="My reservations" onClick={() => {}} />
                <MenuItems label="My properties" onClick={() => {}} />
                <MenuItems label="Airbnb your home" onClick={onRent} />
                <hr />
                <MenuItems label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItems label="Sign up" onClick={registerModal.onOpen} />
                <MenuItems label="Login" onClick={loginModal.onOpen} />
                <MenuItems label="Gift Cards" onClick={() => {}} />
                <MenuItems label="Airbnb your home" onClick={onRent} />
                <MenuItems label="Help Center" onClick={() => {}} />
                <hr />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
