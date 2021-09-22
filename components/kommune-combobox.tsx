import {FunctionComponent} from 'react';
import Select, {components, Styles} from 'react-select';
// import {Color} from '../../utils/colors';
import {KommuneName} from "../types";
import {AllKommuner} from "../kommuner";


export interface KommuneComboboxProps {
    value: KommuneName | undefined;
    onChange: (change: KommuneName | undefined) => void;
    // Page-unique id to prepend in front of react-select https://github.com/JedWatson/react-select/issues/2629
    instanceId: string;
}

/**
 * This is the selector component that will be used to select wind farms.
 * It is a fully controlled wrapper around react-select.
 */
export const KommuneCombobox: FunctionComponent<KommuneComboboxProps> = (props) => {
    const onChange = (selected: HasLabelAndValue<KommuneName> | null) => {
        props.onChange(selected?.value ?? undefined);
    };

    let value: HasLabelAndValue<KommuneName> | null = null!;
    if (props.value !== undefined) {
        value = giveLabelAndValue(props.value);
    }

    // Map wind farm to provided options
    const options: Array<HasLabelAndValue<KommuneName>> = Object.values(AllKommuner).map((providedOption) =>
        giveLabelAndValue(providedOption),
    );

    return (
        <Select
            // styles={styles}
            value={value}
            onChange={onChange}
            options={options}
            // Page-unique id to prepend in front of react-select https://github.com/JedWatson/react-select/issues/2629
            instanceId={props.instanceId}
            placeholder={'Søg efter kommune'}
            styles={styles}
        />
    );
};


// // Style object for React-select
const styles: Styles<any, false> = {
    control: (provided) => ({
        ...provided,
        borderColor: "#0F81E8",
        borderWidth: 2,

        minHeight: "3rem",

        // remove some of the default styles that are activated on focus / hover
        boxShadow: 'none',
        ':hover': {
            borderColor: "#0F81E8",
        },
        fontSize: '1.2rem',
        color: "#000"
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "hsl(0, 0%, 30%)"
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#000"
    }),
};

// Same as Select Component takes for its option type but it's not exported directly so we redefine here.
interface HasLabelAndValue<T> {
    label: string;
    value: T;
}

function giveLabelAndValue(kommuneName: KommuneName): HasLabelAndValue<KommuneName> {
    return {
        label: kommuneName,
        value: kommuneName,
    };
}
