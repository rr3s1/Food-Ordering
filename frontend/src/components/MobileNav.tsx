import React from 'react'
import { SheetTrigger, Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className=" bg-white" >
        <Menu className="text-orange-500 bg-white" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
            <span> Welcome to MernEats.com!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
        
            <Button className="flex-1 font-bold bg-orange-500"
            >
            Log In
            </Button>
        
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
