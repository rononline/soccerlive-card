import { html } from 'lit-element';

// For real errors: wrong entity, integration down, timeout (red accent)
export const renderCardError = (icon, title, message, hint = null) => html`
  <ha-card style="padding: 16px; text-align: center; color: var(--error-color, #ef5350);">
    <div style="font-size: 24px; margin-bottom: 8px;">${icon}</div>
    <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">${title}</div>
    <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">${message}</div>
    ${hint ? html`<div style="font-size: 11px; color: var(--text-primary-color); background: rgba(0,0,0,0.1); padding: 8px; border-radius: 4px; margin-top: 8px;">${hint}</div>` : ''}
  </ha-card>
`;

// For expected empty states: off-season, no live match, endpoint not supported (neutral)
export const renderInfoState = (icon, title, message, hint = null) => html`
  <ha-card style="padding: 24px 16px; text-align: center; color: var(--secondary-text-color);">
    <div style="font-size: 32px; margin-bottom: 12px; opacity: 0.5;">${icon}</div>
    <div style="font-size: 13px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color);">${title}</div>
    <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">${message}</div>
    ${hint ? html`<div style="font-size: 11px; opacity: 0.5; margin-top: 8px;">${hint}</div>` : ''}
  </ha-card>
`;

export const validateEntity = (hass, entityId) => {
  if (!hass) return { valid: false, error: 'Home Assistant not available' };
  if (!entityId) return { valid: false, error: 'No entity specified' };
  if (!(entityId in hass.states)) return { valid: false, error: `Entity not found: ${entityId}` };
  return { valid: true };
};

export const validateSensor = (hass, entityId, sensorType = 'soccer_live') => {
  const validation = validateEntity(hass, entityId);
  if (!validation.valid) return validation;

  if (!entityId.includes(sensorType)) {
    return {
      valid: false,
      error: `Wrong sensor type: ${entityId}`,
      hint: `Expected a ${sensorType} sensor`
    };
  }

  const stateObj = hass.states[entityId];
  if (stateObj.state === 'unavailable') {
    return {
      valid: false,
      error: 'Sensor unavailable',
      hint: 'Check if the Soccer Live integration is running'
    };
  }

  return { valid: true };
};
