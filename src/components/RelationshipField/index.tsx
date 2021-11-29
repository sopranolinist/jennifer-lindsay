import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import get from 'lodash/get';
import React, { ChangeEvent } from 'react';

interface RelationshipFieldProps {
  classes: {
    formField: string;
    fieldButton: string;
  };
  handleChange: (e: ChangeEvent<any>) => void;
  onClickAdd: (e: ChangeEvent<any>) => void;
  onClickEdit: (e: ChangeEvent<any>) => void;
  formatItem: (item: any) => string;
  errors: any;
  touched: boolean;
  value: any;
  items: {}[];
  containerProps?: any | undefined;
  label: string;
  name: string;
  style?: any;
  disabled?: boolean;
  disableAdd?: boolean;
  disableEdit?: boolean;
  required?: boolean;
  admin?: boolean;
  sm?: number;
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto min-content',
    gridGap: 15,
    alignItems: 'center',
  },
  containerEdit: {
    display: 'grid',
    gridTemplateColumns: 'auto min-content min-content',
    gridGap: 15,
    alignItems: 'center',
  },
  containerDisabled: {},
  containerNoButtons: {
    gridTemplateColumns: 'auto',
  },
  formField: {
    width: '100%',
    marginTop: 0,
    marginBottom: 0,
  },
};

const RelationshipField = (props: RelationshipFieldProps) => {
  let containerStyle = { ...props.style };
  if (props.value) containerStyle = { ...containerStyle, ...styles.containerEdit };
  else containerStyle = { ...containerStyle, ...styles.container };
  if (props.disabled) containerStyle = { ...containerStyle, ...styles.containerDisabled };
  if (props.disableAdd && props.disableEdit)
    containerStyle = { ...containerStyle, ...styles.containerNoButtons };

  const defaultFormat = (type: string) => {
    return type === 'person' ? 'TBD' : type === 'position' ? '' : type === 'title' ? '' : '';
  };

  let { value, items: menuItems } = props;

  if (get(props, 'value.id')) {
    if (!props.items.map((item: any) => item.id).includes(props.value.id)) {
      menuItems.unshift(value);
    } else {
      value = props.items.filter((item: any) => item.id === value.id)[0];
    }
  } else {
    value = defaultFormat(props.name);
  }

  return (
    <Grid
      item
      {...props.containerProps}
      xs={12}
      sm={props.sm ? props.sm : 0}
      container
      style={containerStyle}
    >
      <FormControl required={props.required} className={props.classes.formField}>
        <InputLabel htmlFor={`${props.name}-select`}>{props.label}</InputLabel>
        <Select
          data-testid={`${props.name}-select`}
          onChange={props.handleChange}
          value={value}
          disabled={props.disabled}
          error={!!props.errors}
          inputProps={{
            name: props.name,
            id: `${props.name}-select`,

            onKeyDown: props.handleChange,
          }}
        >
          <MenuItem value={undefined}>{''}</MenuItem>
          {props.items.map((item: any) => (
            <MenuItem value={item} key={item.id}>
              {props.formatItem(item)}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>{props.errors && props.touched && props.errors}</FormHelperText>
      </FormControl>

      {!props.disableAdd && (
        <Button
          color="primary"
          variant="outlined"
          disabled={props.disabled}
          size="small"
          onClick={props.onClickAdd}
          className={props.classes.fieldButton}
        >
          +
        </Button>
      )}

      {props.value && !props.disableEdit && (
        <Button
          color="primary"
          disabled={props.disabled}
          variant="outlined"
          size="small"
          onClick={props.onClickEdit}
          className={props.classes.fieldButton}
        >
          ✎
        </Button>
      )}
    </Grid>
  );
};

export default RelationshipField;
