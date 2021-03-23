import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { jobItem } from '../style';

const JobItem = (props) => {
  return (
    <TouchableOpacity
      style={jobItem.container}
      onPress={props.trash ? null : props.onSelect}>
      <Text style={jobItem.text}>{props.job.title}</Text>
      <Text style={jobItem.desc}>{props.job.company}</Text>
      <Text style={jobItem.desc}>{props.job.location}</Text>
      {props.trash ? (
        <TouchableOpacity style={jobItem.trash} onPress={props.onDelete}>
          <Icon name={'trash'} size={25} color={'#FFF'} />
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

export { JobItem };

