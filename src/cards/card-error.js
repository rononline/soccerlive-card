import { html } from 'lit-element';

// For real errors: wrong entity, integration down, timeout (red accent)
export const renderCardError = (icon, title, message, hint = null) => html`
  <ha-card style="padding: 20px 18px; text-align: center; color: var(--cl-live, var(--error-color, #ef5350)); background: var(--cl-bg, var(--card-background-color)); border: 1px solid var(--cl-glass-border, rgba(239,68,68,0.24)); border-radius: 18px; box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.24));">
    <div style="font-size: 26px; margin-bottom: 10px;">${icon}</div>
    <div style="font-size: 14px; font-weight: 800; margin-bottom: 5px; color: var(--cl-text, var(--primary-text-color));">${title}</div>
    <div style="font-size: 12px; color: var(--cl-text-2, var(--secondary-text-color)); margin-bottom: 8px;">${message}</div>
    ${hint ? html`<div style="font-size: 11px; color: var(--cl-text-2, var(--secondary-text-color)); background: var(--cl-surface, rgba(0,0,0,0.1)); border: 1px solid var(--cl-divider, transparent); padding: 8px; border-radius: 8px; margin-top: 8px;">${hint}</div>` : ''}
  </ha-card>
`;

// For expected empty states: off-season, no live match, endpoint not supported (neutral)
export const renderInfoState = (icon, title, message, hint = null) => html`
  <ha-card style="padding: 26px 18px; text-align: center; color: var(--cl-text-2, var(--secondary-text-color)); background: var(--cl-bg, var(--card-background-color)); border: 1px solid var(--cl-glass-border, rgba(255,255,255,0.10)); border-radius: 18px; box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.20));">
    <div style="font-size: 32px; margin-bottom: 12px; opacity: 0.55;">${icon}</div>
    <div style="font-size: 13px; font-weight: 800; margin-bottom: 4px; color: var(--cl-text, var(--primary-text-color));">${title}</div>
    <div style="font-size: 12px; opacity: 0.78; margin-bottom: 8px;">${message}</div>
    ${hint ? html`<div style="font-size: 11px; opacity: 0.62; margin-top: 8px;">${hint}</div>` : ''}
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
