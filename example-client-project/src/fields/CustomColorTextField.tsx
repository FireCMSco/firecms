import React from "react";
import { TextField } from "@mui/material";
import { FieldDescription, FieldProps } from "firecms";

interface CustomColorTextFieldProps {
    color: string
}

export  function CustomColorTextField({
                                                 property,
                                                 value,
                                                 setValue,
                                                 customProps,
                                                 touched,
                                                 error,
                                                 isSubmitting,
                                                 context, // the rest of the entity values here
                                                 ...props
                                             }: FieldProps<string, CustomColorTextFieldProps>) {


    const backgroundColor = customProps?.color ?? "#efe8e8";
    return (
        <>
            <TextField required={property.validation?.required}
                       sx={{
                           backgroundColor: backgroundColor
                       }}
                       error={!!error}
                       disabled={isSubmitting}
                       label={property.name}
                       value={value ?? ""}
                       onChange={(evt: any) => {
                           setValue(
                               evt.target.value
                           );
                       }}
                       helperText={error}
                       fullWidth
                       variant={"filled"}/>

            <FieldDescription property={property}/>
        </>

    );

}
