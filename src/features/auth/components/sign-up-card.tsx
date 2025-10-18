import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Card, CardDescription,
         CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SignInFlow } from "../types"
import React, { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react"
import { TriangleAlert } from "lucide-react"

interface SignUpCardProps {
    setState: (state: SignInFlow) => void
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
    const { signIn } = useAuthActions()
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [error, setError] = useState("")
    const [pending, setPending] = useState(false)

    const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        if(password !== conPassword) {
            setError("Passwords do not match!")
            return
        }

        setPending(true)
        signIn("password", { name, email, password, flow: "signUp" }).catch(()=> {
            setError("Something else went wrong (yeah, we don't know what it is...)")
        
        }).finally(()=> {
            setPending(false)
        })
    }

    const handleProviderSignUp = (value: "github" | "google")=> {
        setPending(true)
        signIn(value).finally(()=> {
            setPending(false)
        })
    }

    return (
        <Card className="w-full h-full p-8 bg-white">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Sign up to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
             {!!error && (
                            <div className="p-3 rounded-md flex items-center gap-x-2 bg-red-300 text-sm mb-6">
                                <TriangleAlert className="size-4 "/>
                                <p>{ error }</p>
                            </div>
                        )}
            <CardContent className="space-y-5 px-0 pb-0">
                <form onSubmit={onPasswordSignUp} className="space-y-2.5">
                     <Input 
                    disabled={pending} 
                    value={name} 
                    onChange={(e)=> {setName(e.target.value)}}
                    placeholder="Name"
                    required/>
                    
                    <Input 
                    disabled={pending} 
                    value={email} 
                    onChange={(e)=> {setEmail(e.target.value)}}
                    placeholder="Email"
                    type="email"
                    required/>

                    <Input 
                    disabled={pending} 
                    value={password} 
                    onChange={(e)=> {setPassword(e.target.value)}}
                    placeholder="Password"
                    type="password"
                    required/>

                    <Input 
                    disabled={pending} 
                    value={conPassword} 
                    onChange={(e) =>{setConPassword(e.target.value)}}
                    placeholder="Confirm password"
                    type="password"
                    required/>

                    <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg" disabled={pending}>
                        Continue
                    </Button>
                </form>

                <Separator/>

                <div className="flex flex-col gap-y-2.5">
                    <Button
                    disabled={pending}
                    onClick={() => {handleProviderSignUp("google")}}
                    variant="outline"
                    size="lg"
                    className="w-full relative">
                        <FcGoogle className="size-5 absolute top-3 left-2.5"/>
                        Continue with Google
                    </Button>

                    <Button
                    disabled={pending}
                    onClick={() => {handleProviderSignUp("github")}}
                    variant="outline"
                    size="lg"
                    className="w-full relative">
                        <FaGithub className="size-5 absolute top-3 left-2.5"/>
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Already have an account? 
                    <span onClick={() => {setState("signIn")}} className="text-sky-700 hover:underline cursor-pointer"> Sign in</span>
                </p>
            </CardContent>
        </Card>
    )
}