import { hadleSubmission } from "@/app/actions";
import SubmitButton from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function CreateBlogRoute() {
  return (
    <div>
      <Card className="max-w-lg mx-auto mt-8 ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world!!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5 " action={hadleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                name="title"
                required
                type="text"
                placeholder="Title"
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea
                name="content"
                required
                placeholder="Content"
              ></Textarea>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input
                name="url"
                required
                type="url"
                placeholder="Image URL"
              ></Input>
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
