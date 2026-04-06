// app/components/user-form.tsx
'use client'

import { UseFormReturn } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UserFormData } from '../actions/schemas'


interface FormComponentProps {
  form: UseFormReturn<UserFormData>
}

const inputClass = [
  "bg-white dark:bg-slate-800",
  "text-gray-900 dark:text-slate-100",
  "placeholder:text-gray-400 dark:placeholder:text-slate-500",
  "border border-gray-300 dark:border-slate-600",
  "focus-visible:ring-blue-500",
].join(" ")

const labelClass = "text-gray-700 dark:text-slate-200"
const descClass  = "text-gray-500 dark:text-slate-400"
const errorClass = "text-red-600 dark:text-red-400 text-sm mt-1"

export function UserForm({ form }: FormComponentProps) {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="name"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className={labelClass}>Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" className={inputClass} {...field} />
            </FormControl>
            <FormDescription className={descClass}>
              Enter full name.
            </FormDescription>
            {fieldState.error && (
              <p className={errorClass}>{String(fieldState.error.message) || ''}</p>
            )}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className={labelClass}>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john@example.com" className={inputClass} {...field} />
            </FormControl>
            <FormDescription className={descClass}>
              Enter email address.
            </FormDescription>
            {fieldState.error && (
              <p className={errorClass}>{String(fieldState.error.message) || ''}</p>
            )}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className={labelClass}>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="04xxxxxxxx" className={inputClass} {...field} />
            </FormControl>
            <FormDescription className={descClass}>
              Enter phone number in Australian phone number format.
            </FormDescription>
            {fieldState.error && (
              <p className={errorClass}>{String(fieldState.error.message) || ''}</p>
            )}
          </FormItem>
        )}
      />
    </Form>
  )
}
