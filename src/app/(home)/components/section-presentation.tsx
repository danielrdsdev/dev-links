import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const SectionPresentation = () => {
  return (
    <section className="grid place-items-center space-y-4">
      <div className="rounded-full border-2 bg-gradient-to-br from-pink-600 via-sky-500 to-violet-900 p-1">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/97995126?v=4"
            alt="Avatar image"
          />
          <AvatarFallback className="bg-background/60 backdrop-blur-sm">
            DR
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-0.5 text-center">
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Daniel Rodrigues
        </h1>

        <p className="text-sm text-muted-foreground">
          Hello! My name is Daniel and I am a Front End Developer.
        </p>
      </div>
    </section>
  )
}
