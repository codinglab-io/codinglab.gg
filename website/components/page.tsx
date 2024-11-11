'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Github, Menu, MessageCircle, Twitch, Twitter, X } from 'lucide-react';

export function BlockPage() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <Button
        variant="ghost"
        className="text-white hover:text-purple-400 hover:bg-gray-800"
      >
        Home
      </Button>
      <Button
        variant="ghost"
        className="text-white hover:text-purple-400 hover:bg-gray-800"
      >
        Servers
      </Button>
      <Button
        variant="ghost"
        className="text-white hover:text-purple-400 hover:bg-gray-800"
      >
        Community
      </Button>
      <Button
        variant="ghost"
        className="text-white hover:text-purple-400 hover:bg-gray-800"
      >
        About
      </Button>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">codinglab.gg</h1>
          <div className="hidden md:flex space-x-4">
            <NavItems />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-purple-400 hover:bg-gray-800"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-gray-900"
              closeButton={
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 text-white hover:text-purple-400 hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
              }
            >
              <nav className="flex flex-col space-y-4 mt-12">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Welcome to codinglab.gg</h2>
          <p className="text-xl mb-8">
            Where coding meets gaming. Join our thriving community today!
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Join Our Discord
          </Button>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Our Game Servers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-violet-500 border-opacity-0 relative overflow-hidden group transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-lg hover:shadow-violet-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
              <CardHeader>
                <CardTitle className="text-violet-300">Minecraft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Join our Minecraft server and build amazing structures with
                  fellow coders!
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-violet-500 border-opacity-0 relative overflow-hidden group transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-lg hover:shadow-violet-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
              <CardHeader>
                <CardTitle className="text-violet-300">
                  Counter-Strike: Global Offensive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Compete in intense matches on our custom CS:GO servers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-violet-500 border-opacity-0 relative overflow-hidden group transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-lg hover:shadow-violet-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
              <CardHeader>
                <CardTitle className="text-violet-300">Among Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Play Among Us with a twist! Can you spot the bug in the code?
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Discord Community
          </h3>
          <p className="text-xl mb-8">
            Connect with other developers, share your projects, and participate
            in coding challenges!
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <MessageCircle className="mr-2 h-5 w-5" />
            Join Discord
          </Button>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 codinglab.gg. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-purple-400 hover:bg-gray-800"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-purple-400 hover:bg-gray-800"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-purple-400 hover:bg-gray-800"
            >
              <Twitch className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-purple-400 hover:bg-gray-800"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
