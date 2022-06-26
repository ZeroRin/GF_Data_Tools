# %%
from gf_utils.stc_data import get_stc_data
import os
import csv
import datetime
import pandas as pd
import re

from pathlib import Path
os.chdir(Path(__file__).resolve().parent)
# %%
region = 'ch'
stc_data = get_stc_data(
    stc_dir=f'../data/{region}/stc', 
    table_dir=f'../data/{region}/asset/table',
    subset=['enemy_character_type','enemy_in_team','enemy_team','spot','mission'],
)

# %%
get_df = lambda d, k: pd.DataFrame.from_records(iter(d.values()),columns=k,index='id').convert_dtypes()
s = get_df(stc_data['spot'],['id','mission_id','enemy_team_id'])
m = get_df(stc_data['mission'],['id','name'])
t = get_df(stc_data['enemy_team'],['id','enemy_leader','effect_ext'])
e = get_df(stc_data['enemy_in_team'],['id','enemy_team_id', 'enemy_character_type_id','number'])
c = get_df(stc_data['enemy_character_type'],['id','name'])
# %%
ec = e.join(c,on='enemy_character_type_id',rsuffix='_enemy_character_type',how='left').drop(columns='enemy_character_type_id').groupby(['enemy_team_id','name']).sum().reset_index()
ec['member'] = ec.apply(lambda x: f"{x['name']}*{x['number']}",axis=1)
ec = ec.groupby(['enemy_team_id']).agg({'member':'|'.join})
ec
# %%
tl = t.join(c,on='enemy_leader').drop(columns='enemy_leader').rename(columns={'name':'leader'})
m['name'] = m.apply(lambda x: re.sub('//n','',x['name']).split('|')[0],axis=1)
ms = s.join(m,on='mission_id').drop(columns=['mission_id'])
mstl = ms.join(tl,on='enemy_team_id',how='right').rename(columns={'name':'mission'}).groupby('enemy_team_id').first()
mstl
# %%
mstlec = mstl.join(ec,how='left').reindex(columns=['mission','leader','effect_ext','member'])
mstlec = mstlec.fillna({'mission':'','leader':'','member':'','effect_ext':0,})
mstlec['effect_ext'] = mstlec.apply(lambda x: str(x['effect_ext']) if x['effect_ext'] > 0 else '',axis=1)
mstlec
# %%
mstlec.to_csv('enemy_team_info.csv')
# %%
