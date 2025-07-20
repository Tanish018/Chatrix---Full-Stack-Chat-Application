import React from 'react'
import { Link } from "react-router-dom";
import { useAuthStore } from '../store/useAuthStore'
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {

  const { logout, authUser } = useAuthStore()

  return (
    <header className='bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg'>
      <div className="container mx-auto px-4 h-16">
        <div className="flex justify-between items-center h-full">
          <div className="LOGO flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatrix</h1>
            </Link>
          </div>

          <div className="RIGHT flex items-center gap-8">
            <Link to={"/settings"}>
              <Settings className="size-5 hover:opacity-80 transition-all" />
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"}>
                  <User className="size-5 hover:opacity-80 transition-all" />
                </Link>
                <Link to={"/login"}>
                  <button className="flex items-center cursor-pointer hover:opacity-80 transition-all" onClick={logout}>
                    <LogOut className="size-5" />
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
