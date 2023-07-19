"use client";

import React, { useState } from "react";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import axios from "axios";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import useAuthModal from "@/app/hooks/useAuthModal";

type StartAuthModalProps = {};

const StartAuthModal: React.FC<StartAuthModalProps> = () => {
  const startAuthModal = useAuthModal();

  const [isLoading, setIsLoading] = useState(false);

  // establish form constrols
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        startAuthModal.onClose();
      })
      .catch((error) => console.log("register error", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" />
      <Input
        id="country"
        label="Country/Region"
        type="select"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phone"
        label="Phone number"
        type="text"
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="mb-3 mt-3 flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={AiFillFacebook}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Apple"
        icon={BsApple}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with email"
        icon={AiOutlineMail}
        onClick={() => {}}
      />
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={startAuthModal.isOpen}
      title="Log in or sign up"
      actionLabel="Continue"
      onClose={startAuthModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
export default StartAuthModal;
