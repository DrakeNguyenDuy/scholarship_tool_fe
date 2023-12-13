/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Search from "../../../components/search";
import Input from "../../../components/input";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { useForm } from "react-hook-form";
import { AuthorizationSchema, AuthorizationType } from "../../../utils/rules";

function UserGroup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorizationType>({
    resolver: yupResolver(AuthorizationSchema),
  });
  return (
    <>
      <div className="columns-3">
        <div>
         <Search placeHolder="Nhap ten group"/>
          </div>
        <div >
          <Input name={""}nameLable=""/>
           </div>
        <div>  <Search placeHolder="Nhap ten nguoi dung"/></div>
      </div>
    </>
  );
}

export default UserGroup;
