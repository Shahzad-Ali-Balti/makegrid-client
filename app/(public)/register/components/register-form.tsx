"use client"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import placeholderImage from "@/assets/register-graphic.jpg"
import {z} from "zod"
import {SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {axiosInstance} from "@/utils/axiosInstance"
import {useToast} from "@/hooks/use-toast"
import {useState} from "react"
import {useRouter} from "next/navigation"
import Link from "next/link"
import * as motion from "motion/react-client"

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  })

  const [isLoading, setIsLoading] = useState(false)

  const {toast} = useToast()
  const router = useRouter()

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async data => {
    setIsLoading(true)
    console.log(data)
    try {
      setIsLoading(true)
      const res = await axiosInstance.post("/api/accounts/signup/", data)
      console.log(res)
      setIsLoading(false)
      toast({
        title: "Account created successfully",
        description:
          "You will now be redirected to login page. Please login in to your account.",
      })
      setTimeout(() => {
        router.push("/login")
      }, 3000)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
      toast({
        title: "An error occurred.",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <motion.div
      animate={{opacity: 1, scale: 1}}
      initial={{opacity: 0, scale: 0.8}}
      transition={{duration: 0.5, ease: "anticipate"}}
    >
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, errors => {
                  console.log("Validation Errors:", errors)
                })}
                className="p-6 md:p-8"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Get started</h1>
                    <p className="text-balance text-muted-foreground">
                      Create a new account to get started.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="john_doe" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="m@example.com" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input {...field} type="password" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    isLoading={isLoading}
                    type="submit"
                    className="w-full"
                  >
                    Register
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="underline underline-offset-4"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </Form>
            <div className="relative hidden bg-muted md:block">
              <img
                src={placeholderImage.src}
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
        <div className="text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </motion.div>
  )
}
