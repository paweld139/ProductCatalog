import {
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    RowProps
} from "reactstrap";

import {
    FormInput
} from "../interfaces";

interface Props<T> {
    inputs: FormInput<T>[];
    rowProps: RowProps,
    data: T;
    setData: (data: T) => void;
}

const AppForm = <T,>({
    inputs,
    rowProps,
    data,
    setData
}: Props<T>) => {
    return (
        <Form>
            <Row {...rowProps}>
                {inputs.map((input, index) => {
                    return (
                        <FormGroup key={index}>
                            <Label for={input.field as string}>{input.label}</Label>
                            <Input
                                type={input.type}
                                name={input.field as string}
                                id={input.field as string}
                                value={data[input.field] as string}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [input.field]: typeof data[input.field] === 'number' ? +e.target.value : e.target.value
                                    });
                                }}
                            />
                        </FormGroup>
                    );
                })}
            </Row>
        </Form>
    );
};

export default AppForm;